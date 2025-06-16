package com.carrinho_carro.back_carrinho.Service;

import com.carrinho_carro.back_carrinho.Model.Carrinho;
import com.carrinho_carro.back_carrinho.Repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CarrinhoService {
    
    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public List<Carrinho> obterTodosCarrinhos() {
        return carrinhoRepository.findAll();
    }

    public Optional<Carrinho> obterCarrinhoPorId(Long id) {
        return carrinhoRepository.findById(id);
    }

    public Carrinho criarCarrinho(Carrinho carrinho) {
        return carrinhoRepository.save(carrinho);
    }

    public Carrinho atualizarCarrinho(Long id, Carrinho carrinho) {
        if (carrinhoRepository.existsById(id)) {
            carrinho.setId(id);
            return carrinhoRepository.save(carrinho);
        }
        return null;
    }

    public void removerCarrinho(Long id) {
        carrinhoRepository.deleteById(id);
    }

    public List<Carrinho> pesquisarCarrinhos(String nome, Double precoMaximo, Integer quantidadeMinima) {
        List<Carrinho> resultado = carrinhoRepository.findAll();
        if (nome != null) {
            resultado = carrinhoRepository.findByNomeContaining(nome);
        }
        if (precoMaximo != null) {
            resultado = carrinhoRepository.findByPrecoLessThan(precoMaximo);
        }
        if (quantidadeMinima != null) {
            resultado = carrinhoRepository.findByQuantidadeGreaterThan(quantidadeMinima);
        }
        return resultado;
    }
}
