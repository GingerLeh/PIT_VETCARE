import React, { useEffect } from "react";
import { useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    Space,
    Switch,
  } from 'antd';
import { useParams } from "react-router-dom";

function FormCadastroClientes() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
            <h1 style={{padding:32}}>{ id == undefined ? "Cadastro de clientes" : "Alteração de clientes"}</h1>
            <Form
                labelCol={{
                span: 15,
                }}
                wrapperCol={{
                span:80,
                }}
                layout="horizontal"
                style={{
                maxWidth: 1000,
                }}
            >
                <div style={{display:"flex", gap:32}}>
                    <div style={{margin:35}}>
                        <Form.Item label="Nome">
                            <Input  value={inputNome}/>
                        </Form.Item>
                        <Form.Item label="RG">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Cidade de Nascimento">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="CPF/CNPJ">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Endereço">
                            <Input />
                        </Form.Item>
                    </div>
                    <div style={{
                        margin: 35
                    }}>
                        <Form.Item label="CEP">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Cidade">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Estado">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Contato">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Perfil">
                            <Select defaultValue={"--Selecione--"}>
                                <Select.Option value="-1">--Selecione--</Select.Option>
                                <Select.Option value="1">Cliente</Select.Option>
                                <Select.Option value="2">Fornecedor</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item style={{marginLeft:95}}>
                            <Space wrap>
                                <Button type="primary">Gravar</Button>
                                <Button type="primary">Histórico</Button>
                                <Button href="/pets">Voltar</Button>
                            </Space>
                        </Form.Item>
                    </div>
                </div>
               
            </Form>
        </div>

    )
}

export default FormCadastroClientes;