package com.carrinho_carro.back_carrinho.Repository;

import com.carrinho_carro.back_carrinho.Model.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    List<Carrinho> findByNomeContaining(String nome);
    List<Carrinho> findByPrecoLessThan(Double preco);
    List<Carrinho> findByQuantidadeGreaterThan(Integer quantidade);
}