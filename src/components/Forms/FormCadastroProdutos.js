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

function FormCadastroProdutos() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
            <h1 style={{padding:32}}>{ id == undefined ? "Cadastro de produtos" : "Alteração de produtos"}</h1>
            <Form
                labelCol={{
                span: 10,
                }}
                wrapperCol={{
                span: 30,
                }}
                layout="horizontal"
                style={{
                maxWidth: 1000,
                }}
            >
            <div style={{display:"flex", gap:32}}>
                    <div style={{margin:35}}>
                        <Form.Item label="Descrição">
                            <Input  value={inputNome}/>
                        </Form.Item>
                        <Form.Item label="EAN">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Medida">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Custo">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Margem">
                            <Input />
                        </Form.Item>
                    </div>
                    <div style={{
                        margin: 35
                    }}>
                        <Form.Item label="Venda">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Estoque">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Vencimento">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Contato">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Ativo" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item style={{marginLeft:95}}>
                            <Space wrap>
                                <Button type="primary">Gravar</Button>
                                <Button href="/produtos">Voltar</Button>
                            </Space>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>

    )
}

export default FormCadastroProdutos;