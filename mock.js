//Mock
const { casual } = require("casual");

const mock = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'String',
  Date: () => "2021-06-30",
};

module.exports = mock;
