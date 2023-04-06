export function getLeaderboardData() {
  const url =
    'https://k73smvm3a5dqvoeqeuxrm2hvou0wdlyc.lambda-url.eu-west-1.on.aws/';
  const env = 'dev';

  return fetch(url, {
    method: 'GET',
    headers: {
      environment: env,
    },
  }).then((data) => data?.json());
}
