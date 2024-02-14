// import gapi from 'gapi';
// // Import statement
// // Function 1
// export function appendToGoogleSheet(spreadsheetId, range, valueInputOption, _values, callback) {
//         let values = [
//             [
//                 // Cell values ...
//             ],
//             // Additional rows ...
//         ];
//         // Remove unnecessary assignment
//         // values = _values;
//         const body = {
//             values: _values,
//         };
//         try {
//             gapi.client.sheets.spreadsheets.values.append({
//                 spreadsheetId: spreadsheetId,
//                 range: range,
//                 valueInputOption: valueInputOption,
//                 resource: body,
//             }).then((response) => {
//                 const result = response.result;
//                 console.log(`${result.updates.updatedCells} cells appended.`);
//                 if (callback) callback(response);
//             });
//         } catch (err) {
//             document.getElementById('content').innerText = err.message;
//             return;
//         }
// }

// // Function 2
// function function2() {
//         // TODO: Implement function2
// }

// // Function 3
// function function3() {
//         // TODO: Implement function3
// }

// // Export the functions
// // module.exports = {
// //     appendToGoogleSheet,
// //     function2
// // };
