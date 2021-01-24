import React from 'react'
import MaterialTable from 'material-table'

export default function DataTable(props){
    return (
        <MaterialTable
          title=""
          columns={props.columns}
          data={props.data}
          editable={props.editable}
          actions={props.actions}
          components={props.components}        
          options={{
            search: true,
            filtering: true,
            actionsColumnIndex: -1
          }}
        />
      )
}