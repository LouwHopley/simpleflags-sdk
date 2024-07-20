let fetchFunction: any;

if (typeof window !== 'undefined' && window.fetch) {
  // In a browser environment
  fetchFunction = window.fetch.bind(window);
} else {
  // In a Node.js environment
  const https = require('https');
  fetchFunction = (url: string, options?: RequestInit) => {
    return new Promise<Response>((resolve, reject) => {
      const parsedUrl = new URL(url);
      const requestOptions = {
        method: options?.method || 'GET',
        headers: options?.headers,
      };

      const req = https.request(parsedUrl, requestOptions, (res: any) => {
        let data = '';

        res.on('data', (chunk: any) => {
          data += chunk;
        });

        res.on('end', () => {
          const response = new Response(data, {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers as unknown as HeadersInit,
          });
          resolve(response);
        });
      });

      req.on('error', reject);

      if (options?.body) {
        req.write(options.body);
      }

      req.end();
    });
  };
}

export default class SimpleFlags {
  static baseUrl = 'https://simpleflags.io/api/flag';

  static async isEnabled(props: { teamId: string, environmentKey: string, flagKey: string, groupingKey: string }): Promise<boolean> {
    const { teamId, environmentKey, flagKey, groupingKey } = props;
    const url = `${this.baseUrl}/${flagKey}/${environmentKey}/${groupingKey}`;
    const response = await fetchFunction(url);
    const data = await response.json();
    return data.status === 'enabled';
  }
}
