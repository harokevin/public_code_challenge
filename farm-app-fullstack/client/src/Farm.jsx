import React from 'react'

const Farm = (props) => {
  const f = props.f;
  return (
    <div 
      className="card" 
      style={{ margin: "20px"}}
    >
      <h1 className="card-header">{f.name}</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">State: {f.state}</li>
        <li className="list-group-item">Soil Type: {f.soil_type}</li>
        <li className="list-group-item">Revenue: {f.revenue}</li>
        {((f) => {
          const renderFields = [];
          for (const field in f.fields) {
            renderFields.push(
              <div key={f.name+field}>
              <h2 className="card-header">Field: {field}</h2>
              <li className="list-group-item">
                Crop: {f.fields[field]["crop"]}
              </li>
              <li className="list-group-item">
                Size (acres): {f.fields[field]["size (acres)"]}
              </li>
              </div>
            )
          }
          return renderFields;
        })(f)}
      </ul>
    </div>
  );
}

export default Farm;