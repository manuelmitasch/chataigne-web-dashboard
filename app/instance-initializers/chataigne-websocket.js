export function initialize(appInstance) {
  appInstance.lookup('service:chataigne-websocket');
}

export default {
  name: 'chataigne-websocket',
  initialize
};
