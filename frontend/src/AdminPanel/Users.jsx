import React from 'react'
import Sidebar from './Sidebar'

const Users = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <h1 className='text-center mb-2 mt-1'> Manage Users </h1>
            <div className="table-responsive">
              <table className="table table-hover table-bordered mt-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Downloaded Games</th>
                    <th scope="col">Registration date</th>
                    <th scope="col">Delete user</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>2020-01-01</td>
                    <td><i className="fa-solid fa-trash"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
