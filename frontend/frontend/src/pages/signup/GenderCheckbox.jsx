import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange(selectedGender === 'male' ? '' : 'male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange(selectedGender === 'female' ? '' : 'female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;





// STARTER CODE FOR THIS FILE

// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className='form-control'>
//              <label className={'label gap-2 cursor-pointer'} >
//               <span className='label-text'>Male</span>
//               <input type='checkbox' className='checkbox border-slate-900' />
//              </label>
//           </div>
//           <div className='form-control'>
//           <label className={'label gap-2 cursor-pointer'} >
//               <span className='label-text'>Female</span>
//               <input type='checkbox' className='checkbox border-slate-900' />
//              </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckbox