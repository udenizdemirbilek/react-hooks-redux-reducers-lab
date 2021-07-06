export function managePresents(state = {numberOfPresents: 0}, action) {
  // your code here

    if (action.type === "presents/increase"){
      return {numberOfPresents: state.numberOfPresents + 1}
    } else {
      return {numberOfPresents: state.numberOfPresents}
    }
  
}
