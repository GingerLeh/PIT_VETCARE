import { Button, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { EditOutlined } from '@ant-design/icons'

function ListaMedicamentos() {

    const [medicamentos, setMedicamentos] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        }, 
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },  
        {
            title: 'Ativo',
            dataIndex: 'ativo',
            key: 'ativo',
        }, 
        {
            title: 'Perfil',
            dataIndex: 'perfilId',
            key: 'perfilId',
        }, 
        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => {
                
                let url = "produtos/alterar/" + record.id
                return (
                    <Space size="middle">
                        <Tooltip title="Editar">
                            <Button href={url} shape="circle" type="primary"><EditOutlined></EditOutlined></Button>
                        </Tooltip>
                    </Space>   
                )            
            }
        }, 

    ]

    function carregarMedicamentos(){
        
        fetch("http://localhost:5000/medicamentos/listar")
        .then(function(r) {
            return r.json();
        })
        .then(function(r) {
            setMedicamentos(r.lista);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    useEffect(function() {
        carregarMedicamentos();
    })

    return (
        <div>
            <Button style={{marginBottom:16}} href='/prescrever/criar' type="primary">Prescrever novo medicamento</Button>
            <Table columns={columns} dataSource={medicamentos}>
                
            </Table>
        </div>
    )
}

export default ListaMedicamentos;