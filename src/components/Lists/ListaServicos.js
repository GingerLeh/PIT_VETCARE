import { Button, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { EditOutlined } from '@ant-design/icons'

function ListaServicos() {

    const [servicos, setServicos] = useState([]);

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
                
                let url = "servicos/alterar/" + record.id
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

    function carregarServicos(){
        
        fetch("http://localhost:5000/servicos/listar")
        .then(function(r) {
            return r.json();
        })
        .then(function(r) {
            setServicos(r.lista);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    useEffect(function() {
        carregarServicos();
    })

    return (
        <div>
            <Button style={{marginBottom:16}} href='/servicos/criar' type="primary">Cadastrar serviços</Button>
            <Table columns={columns} dataSource={servicos}>
                
            </Table>
        </div>
    )
}

export default ListaServicos;