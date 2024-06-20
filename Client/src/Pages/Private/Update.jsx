import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Update = () => {
    const {user} = useContext(AuthContext)
    const spot = useLoaderData()
    const handleUpdate = (event) =>{
        event.preventDefault()
        const form = event.target;
    
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
    
        const updatedInfo = {
            image,
            tourists_spot_name,
            country_name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            total_visitors_per_year,
            user_email,
            user_name
        };


        fetch(`https://server-five-pearl.vercel.app/update/${spot._id}`,{
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(updatedInfo)
        })
        .then(res=> res.json())
        .then(data =>{
            // console.log(data)
            if(data.modifiedCount> 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Spot Updated Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        } 
    )
    

    }

    return (
        <div className="bg-[#F4F3F0] p-10 sm:p-24">
    <Helmet>
        <title>Adventure Avenue | Update</title>
    </Helmet>
        <h2 className="text-3xl font-extrabold">Add a Tourists Spot</h2>
        <form onSubmit={handleUpdate}>
            
            
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full'>
            {/* Image URL */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.image} type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Tourists Spot Name */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tourists Spot Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.tourists_spot_name} required type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Country Name */}
            <div className="mb-8">
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Country Name</span>
        </label>
        <select name="country_name" className="select select-bordered w-full" required defaultValue={spot.country_name}>
            <option value="">Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Thailand">Thailand</option>
        </select>
    </div>
</div>





            {/* Location */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.location} type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Short Description */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.short_description} type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            </div>
            <div className='w-full'>
            {/* Average Cost */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Average Cost $</span>
                    </label>
                    <label className="input-group">
                        <input required defaultValue={spot.average_cost} type="number" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* Seasonality */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Seasonality</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.seasonality} type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Travel Time */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Travel Time</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.travel_time} type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Total Visitors Per Year */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Total Visitors Per Year</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={spot.total_visitors_per_year} type="text" name="total_visitors_per_year" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* User Email */}
             <div hidden className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label className="input-group">
                        <input readOnly type="email" name="user_email" placeholder="User Email" defaultValue={user.email} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* User Name */}
            <div hidden className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <label className="input-group">
                        <input readOnly type="text" defaultValue={user.displayName} name="user_name" placeholder="User Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            </div>    
        </div>


            {/* Update Button */}
            <input type="submit" value="Update" className="btn btn-block text-gray-700 bg-[#D4AF37]" />
        </form>
    </div>
    );
};

export default Update;