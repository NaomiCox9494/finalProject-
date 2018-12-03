const state = {
  funds : 1000,
  stocks : []
};

const mutations = {
  BUY_STOCK(state, {stockId, quantity, stockPrice}){
  const record = state.stocks.find(element => element.id === stockId);
  if(record){
    record.quantity += quantity;
  } else{
    state.stocks.push(stockId, quantity);

  }
  state.funds -=stockPrice * quantity;
},
  SELL_STOCK(state, {stockId, quantity, stockPrice }){
    const record = state.stocks.find(element => element.id === stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity
    } else{
      state.stocks.splice(state.stocks.indexOf(record, 1))
    }
    state.funds += stockPrice * quantity
  },
  SET_PORTFOLIO(state, {portfolio}){
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio (state, getters){
    // return state.stocks.map(stock);
    const record = state.stocks.find(element => element.id === stockId);
    return{
      id : this.stock.id,
      quantity: stock.quantity,
      name : record.name,
      price: record.price
    }
  },
      funds({state}){
    return state.funds;
  }
};
//ToDo: Create const called getters that is a data object{}
    //ToDo: Inside getters object create stockPortfolio method that takes two parameters (state, getters)
        //ToDo: return state.stocks.map() that is a pointer function that passes stock
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: Return an object
            //ToDo: Set id to stock.id
            //ToDo: Set quantity to stock.quantity
            //ToDo: Set name to record.name
            //ToDo: Set price to record.price
    //ToDo: Create funds method that passes state
        //ToDo: Return state.funds

export default {
  state,
  mutations,
  actions,
  getters
    //ToDo: Export the const state, mutations, actions, and getters
}