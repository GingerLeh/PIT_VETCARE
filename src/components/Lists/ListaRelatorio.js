import { Button, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { EditOutlined } from '@ant-design/icons'

function ListaRelatorio() {

    const [relatorios, setRelatorios] = useState([]);

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
                
                let url = "relatorios/alterar/" + record.id
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

    function carregarRelatorios(){
        
        fetch("http://localhost:5000/produtos/listar")
        .then(function(r) {
            return r.json();
        })
        .then(function(r) {
            setRelatorios(r.lista);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    useEffect(function() {
        carregarRelatorios();
    })

    return (
        <div>
            {/* <Button style={{marginBottom:16}} href='/relatorios/criar' type="primary">Cadastrar produtos</Button> */}
            <Table columns={columns} dataSource={relatorios}>
                
            </Table>
        </div>
    )
}

export default ListaRelatorio;