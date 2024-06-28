/*

When a user fills out a form, they fire countless events.
Most of these events affect a form's input values.
Ergo, it makes sense to hold and update input values in state!







Phase 2 -> Forms
By Sakib Rasul

Core Deliverables
1. Refactor <Form> into a "controlled" form.
2. Add "Your lucky number is X!" after the two fields, where X is dependent on the two fields.
3. Handle form submissions by appending the new user to a local array.
4. Render the array as a list of members in `Form`.
5. (Bonus!) Render the list of members in `App` instead of `Form`.

*/

import Form from './Form';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header>
        <h1>Luck of the Screen</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
