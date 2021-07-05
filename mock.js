//Mock
const mock = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => "Hello",
    Date: () => '2021-06-30',
    PositionCurrency: () => 'USD',
    UpstreamSecurityType: () => 'VSWP',
    Null: () => null,
    Quantity1: () => 250000,
    ClearingBrokerCode: () => "CITI",
    MainAccountCode: () => "CITN_MLP_OTC"
  };

module.exports = mock;