import fetch from 'node-fetch';

let fetchFunction: typeof fetch | any;

// Check if we're in a browser environment
if (typeof window !== 'undefined' && window.fetch) {
  fetchFunction = window.fetch.bind(window);
} else {
  fetchFunction = fetch;
}
const baseUrl = 'https://simpleflags.io/api/flag';

const isEnabled = async (props: { teamId: string; environmentKey: string; flagKey: string; groupingKey: string }): Promise<boolean> => {
  const { teamId, environmentKey, flagKey, groupingKey } = props;
  const url = `${baseUrl}/${flagKey}/${environmentKey}/${groupingKey}`;
  const response = await fetchFunction(url);
  const data = await response.json() as any;
  return data.status === 'enabled';
};

export default {
  isEnabled,
};
