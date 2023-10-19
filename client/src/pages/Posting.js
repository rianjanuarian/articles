import React from 'react'

const Posting = () => {
  return (
    <div className='container'>

<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Content</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Post</label>
  </div>
  <button type="button" className="btn btn-primary">Submit</button>
</form>
    </div>
    
  )
}

export default Posting