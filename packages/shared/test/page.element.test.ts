import { describe, expect, test, it } from 'vitest'
import { PageElement, Project, Page } from '../src'


describe('page.element', () => {
  const project = Project.create()

  test('project.name', () => {
    expect(project.name).toBe('New Project')
  });

  test('project.pages.length === 1', () => {
    expect(project.pages.length).toBe(1)
  });

  test('project.json', () => {
    expect(project.getJson()).toMatchInlineSnapshot(`
      {
        "description": "New Project description",
        "name": "New Project",
        "pages": [
          {
            "description": "New Project description",
            "elements": [],
            "name": "New Project",
          },
        ],
      }
    `)
  });

});