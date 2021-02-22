import { FormGroup, ValidationErrors, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';

export class CustomValidators {
	static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
	  return (control: AbstractControl): { [key: string]: any } => {
	    if (!control.value) {
	      // if control is empty return no error
	      return null;
	    }

	    // test the value of the control against the regexp supplied
	    const valid = regex.test(control.value);

	    // if true, return no error (no error), else return error passed in the second parameter
	    return valid ? null : error;
	  };
	}

	static MustMatch(controlName: string, matchingControlName: string) {
	    return (formGroup: FormGroup) => {
	        const control = formGroup.controls[controlName];
	        const matchingControl = formGroup.controls[matchingControlName];

	        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
	            // return if another validator has already found an error on the matchingControl
	            return;
	        }

	        // set error on matchingControl if validation fails
	        if (control.value !== matchingControl.value) {
	            matchingControl.setErrors({ mustMatch: true });
	        } else {
	            matchingControl.setErrors(null);
	        }
	    }
	}


	static gtToFrom(controlName: string, matchingControlName: string) {

	    return (formGroup: FormGroup) => {
	        const control = formGroup.controls[controlName];
	        const matchingControl = formGroup.controls[matchingControlName];

	        if (matchingControl.errors && !matchingControl.errors.gtToFrom) {
	            // return if another validator has already found an error on the matchingControl
	            return;
	        }

	        // set error on matchingControl if validation fails
	        if (control.value >= matchingControl.value) {
	            matchingControl.setErrors({ gtToFrom: true });
	        } else {
	            matchingControl.setErrors(null);
	        }
	    }
	}


	static checkArrayVal(controlName: string) {
	    return (formGroup: FormGroup) => {
	        const control = formGroup.controls[controlName] as FormArray;

	        console.log(control);

	        const controlsForms = control.controls;

	        for(let x = 0; x < controlsForms.length; x++){

	        	if(x){
	        		let prevItem 	= controlsForms[x-1];
	        		let prevTo 		= prevItem.get('to').value;
	        		console.log(prevTo);

	        	}

	        	// console.log(controlsForms[x].get('slot').value);


	        	(controlsForms[x] as FormArray).controls['slot'].setErrors({ testError: true });
	        }

	      	
	       
	       	return false;

	        // // set error on matchingControl if validation fails
	        // if (control.value !== matchingControl.value) {
	        //     matchingControl.setErrors({ mustMatch: true });
	        // } else {
	        //     matchingControl.setErrors(null);
	        // }
	    }
	}




	// static checkAllValue(controlName: string, index: number) {

	// 	return (formArray: FormArray) => {

 //      		let valid: boolean = true;

 //      		formArray.value.forEach((x, index) => {
 //        		console.log(formArray);
 //      		});

 //      		return false;
 //    	};



	// }
}
