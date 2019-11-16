// import React from 'react';
//
// class ApplyNOW extends React.Component<> {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       //TODO: Define who you are ;)
//       YOU: YOU,
//
//       company: 'A Singaporean Product Software Company',
//       jobTitle: 'Senior Frontend (JavaScript/ReactJS)',
//
//       email: 'mai.huynh@itfinder.vn',
//       phoneNumber: '0931 583 594',
//
//       SALARY: '2500 USD',
//     }
//   }
//
//   render() {
//
//     const state = this.state;
//
//     let messageFromEmployer = '';
//     if ((state.YOU.getExperience("JavaScript/ReactJS").getYears() > 2)
//           && state.YOU.have("Bachelor's degree").orHigher()) {
//
//       //APPLY now if you fit us <3
//           messageFromEmployer = state.YOU.should()
//                                           .apply(state.company)
//                                           .at(state.jobTitle)
//                                           .via(state.phoneNumber, state.email)
//                                           .NOW.toString();
//     }
//
//     return (
//         <div>
//           <h1>Hello Candidates</h1>
//           <h2>
//
//           {messageFromEmployer
//           && <h3>Salary: {state.SALARY}</h3>}
//
//           </h2>
//        </div>);
//   }
// }
//
// export default ApplyNOW;