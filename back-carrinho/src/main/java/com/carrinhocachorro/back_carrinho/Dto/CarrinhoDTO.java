package com.carrinhocachorro.back_carrinho.Dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class CarrinhoDTO {
    private Long id;
    private String nome;
    private BigDecimal preco;
    private String descricao;
    private Integer quantidade;
}
