import { Button, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { EditOutlined } from '@ant-design/icons'

function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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
                
                let url = "usuario/alterar/" + record.id
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

    function carregarUsuarios(){
        
        fetch("http://localhost:5000/usuarios/listar")
        .then(function(r) {
            return r.json();
        })
        .then(function(r) {
            setUsuarios(r.lista);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    useEffect(function() {
        carregarUsuarios();
    })

    return (
        <div>
            <Button style={{marginBottom:16}} href='/usuarios/criar' type="primary">Cadastrar usuarios</Button>
            <Table columns={columns} dataSource={usuarios}>
                
            </Table>
        </div>
    )
}

export default ListaUsuarios;