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

function FormCadastroServicos() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
                     <Form.Item label="Descrição">
                            <Input  value={inputNome}/>
                        </Form.Item>
                        <Form.Item label="Ativo" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item style={{marginLeft:95}}>
                            <Space wrap>
                                <Button type="primary">Gravar</Button>
                                <Button href="/pets">Voltar</Button>
                            </Space>
                        </Form.Item>
      
        </div>

    )
}

export default FormCadastroServicos;