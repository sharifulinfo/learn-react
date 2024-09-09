import React from 'react'

export default function Student(props) {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th width="100">name</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {props.students.map(stu => (
              stu.status === props.status && 
                <tr key={stu.id}>
                  <td>{stu.name}</td>
                  <td>
                      <div>
                          <button onClick={() => props.addStatus(stu , stu.status === 'present' ? 'absent' : 'present' )}>Switch</button>
                          <button onClick={() => props.addStatus(stu , 'all' )}>Remove</button>
                          {/* <button onClick={() => props.addStatus(stu)}>present</button>
                          <button onClick={() => props.addStatus(stu,'absent')}>absent</button> */}
                      </div>
                  </td>
              </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
