// src/simpleflags.ts
let fetch: typeof globalThis.fetch;

if (typeof window !== 'undefined' && window.fetch) {
  // In a browser environment
  fetch = window.fetch.bind(window);
} else {
  // In a Node.js environment
  fetch = require('node-fetch');
}

export default class SimpleFlags {
  static baseUrl = 'https://simpleflags.io/api/flag';

  static async isEnabled(props: { teamId: string, environmentKey: string, flagKey: string, groupingKey: string }): Promise<boolean> {
    const { teamId, environmentKey, flagKey, groupingKey } = props;
    const url = `${this.baseUrl}/${teamId}/${flagKey}/${environmentKey}/${groupingKey}`;
    const response = await fetch(url);
    const data = await response.json() as any;
    return data.status === 'enabled';
  }
}
