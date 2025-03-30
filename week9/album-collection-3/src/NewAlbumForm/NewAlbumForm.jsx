import { useForm } from "react-hook-form";
import "./NewAlbumForm.css"

export function NewAlbumForm(props) {
    const {addAlbumFn} = props;
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    function postSubmit(data) {
        addAlbumFn(data);
        reset();
    }
    return (
        <div className="form-wrapper">
            <h3>Add a New CD!</h3>
            <p className="required">indicates required field</p>
          <form onSubmit={handleSubmit(postSubmit)}>
            <div className="form-group">
              <label className="required" htmlFor="album">Album</label>
              <input type="text" id="album" {...register("album", { required: true})} />
              {errors.album && (<p className="error">An album name is required</p>)}
            </div>
            <div className="form-group">
              <label className="required" htmlFor="artist">Artist</label>
              <input type="text" id="artist" {...register("artist", {required: true})} />
              {errors.artist && (<p className="error">An artist name is required</p>)}
            </div>
            <div className="form-group">
              <label className="required" htmlFor="albumArt">Album Art URL</label>
              <input type="text" id="albumArt" {...register("albumArt", {required: true})} />
              {errors.albumArt && (<p className="error">An image is required</p>)}
            </div>
            <div className="form-group">
              <label htmlFor="year">Year Released</label>
              <input type="text" id="year"{...register("year")} />
            </div>
            <div className="form-group">
              <label className="required" htmlFor="genre">Genre</label>
              <input type="text" id="genre" {...register("genre", {required: true})}/>
              {errors.genre && (<p className="error">A genre is required</p>)}
            </div>
            <div className="check-group">
              <label htmlFor="inCar">Should I put it in my car?</label>
              <input type="checkbox" id="inCar" {...register("inCar")} />
            </div>
            <div className="check-group">
              <label htmlFor="burned">Is it a home-burned copy of the CD?</label>
              <input type="checkbox" id="burned" {...register("burned")} />
            </div>
            <div className="button-wrapper"><button type="submit">Add CD</button></div>
            
          </form>
      </div>
    )
}