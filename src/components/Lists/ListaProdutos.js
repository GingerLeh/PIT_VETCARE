import { Button, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { EditOutlined } from '@ant-design/icons'

function ListaProdutos() {

    const [produtos, setProdutos] = useState([]);

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

    function carregarProdutos(){
        
        fetch("http://localhost:5000/produtos/listar")
        .then(function(r) {
            return r.json();
        })
        .then(function(r) {
            setProdutos(r.lista);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    useEffect(function() {
        carregarProdutos();
    })

    return (
        <div>
            <Button style={{marginBottom:16}} href='/produtos/criar' type="primary">Cadastrar produtos</Button>
            <Table columns={columns} dataSource={produtos}>
                
            </Table>
        </div>
    )
}

export default ListaProdutos;