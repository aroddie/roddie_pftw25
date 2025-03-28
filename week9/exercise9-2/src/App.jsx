import "./App.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import MemberCard from "./MemberCard/MemberCard";

function App() {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const [registration, setRegistration] = useState("");

  function getFormData(data) {
    console.log("form data", data);   
    setRegistration(data);
  }
  console.log("errors", errors)
  return (
    <div>
      <h1>Alpaca Fan Club</h1>
      <h2>Member Registration</h2>
      <form onSubmit={handleSubmit(getFormData)}>
        <fieldset>
          <legend>Personal Data</legend>
          <p className="required">indicates field is required</p>
          <div className="form-group">
            <label htmlFor="firstName" className="required">First Name</label>
            <input type="text" defaultValue="" id="firstName" {...register("firstName", {required: true})}/>
            {errors.firstName ? (<p className="error">Please Enter Your First Name</p>) : <></>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="required">Last Name</label>
          <input type="text" defaultValue="" id="lastName"{...register("lastName", {required: true})} />
          {errors.firstName ? (<p className="error">Please Enter Your Last Name</p>) : <></>}
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress" className="required"> Street Address</label>
          <input type="text" defaultValue="" id="streetAddress" {...register("streetAddress", {required: true})} />
          {errors.firstName ? (<p className="error">Please Enter Your Address</p>) : <></>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State/Province</label>
          <select defaultValue="CA" id="state" {...register("state")}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Conneticut</option>
            <option value="DE">Deleware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            <option value="DC">District of Columbia</option>
            <option value="PR">Puerto Rico</option>
            <option value="ON">Ontario</option>
            <option value="QC">Quebec</option>
            <option value="NS">Novia Scotia</option>
            <option value="NB">New Brunswick</option>
            <option value="MB">Manitoba</option>
            <option value="BC">British Columbia</option>
            <option value="PE">Prince Edward Island</option>
            <option value="SK">Saskatchewan</option>
            <option value="AB">Alberta</option>
            <option value="NL">Newfoundland and Labrador</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" defaultValue="USA" id="country" {...register("country")} />
        </div>
        </fieldset>
        <fieldset>
          <legend>Alpaca Preferences</legend>
          <div className="form-group">
            <p>Favorite Alpaca Color</p>
            <label><input type="radio" value="red" {...register("favColor")} /> Red</label>
            <label><input type="radio" value="brown" {...register("favColor")} /> Brown</label>
            <label><input type="radio" value="black" {...register("favColor")} /> Black</label>
            <label><input type="radio" value="white" {...register("favColor")} /> White</label>
          </div>
          <div className="form-group">
            <label htmlFor="alpacaEssay">What do you like about Alpacas?</label>
            <textarea rows="8" cols="50" id="alpacaEssay" {...register("alpacaEssay")} ></textarea>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <div className="postSubmit" style={registration ? {display: "block"} : {display: "none"}}>
        <MemberCard 
        {...registration}/>
      </div>
    </div>
  )
}

export default App
