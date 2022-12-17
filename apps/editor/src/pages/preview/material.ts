/*
 * @Author: lee
 * @Date: 2022-12-17 21:50:38
 * @LastEditTime: 2022-12-17 22:23:41
 */
import { IProject } from "@lowcode1024/shared";
import { getMaterialRenderFun, materialMap } from "@/data";
import { onMounted, ref } from "vue";
import { loadMaterial } from "@/utils";
import app from "@/app";
import { IMaterial } from "@lowcode1024/shared";

export function useMaterial() {
  const project: IProject = JSON.parse(
    localStorage.getItem("__project") || "{}"
  );

  const materials = project.pages[0]._elements.map(
    (item) => materialMap[item.materialId]
  );

  const loading = ref(false);

  onMounted(() => {
    loading.value = true;

    Promise.all(materials.map(loadMaterial)).then(() => {
      loading.value = false;
      materials.forEach((m: IMaterial) => {
        app.component(m.name, getMaterialRenderFun(m));
      });
    });
  });

  return {
    loading,
    pages: project.pages,
  };
}
