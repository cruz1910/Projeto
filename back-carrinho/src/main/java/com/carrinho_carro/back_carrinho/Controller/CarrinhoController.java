package com.carrinho_carro.back_carrinho.Controller;

import com.carrinho_carro.back_carrinho.Model.Carrinho;
import com.carrinho_carro.back_carrinho.Service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {
    
    @Autowired
    private CarrinhoService carrinhoService;

    @GetMapping
    public ResponseEntity<List<Carrinho>> obterTodosCarrinhos() {
        return ResponseEntity.ok(carrinhoService.obterTodosCarrinhos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Carrinho> obterCarrinhoPorId(@PathVariable Long id) {
        Optional<Carrinho> carrinho = carrinhoService.obterCarrinhoPorId(id);
        return carrinho.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Carrinho> criarCarrinho(@RequestBody Carrinho carrinho) {
        Carrinho carrinhoCriado = carrinhoService.criarCarrinho(carrinho);
        return ResponseEntity.ok(carrinhoCriado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carrinho> atualizarCarrinho(@PathVariable Long id, @RequestBody Carrinho carrinho) {
        Carrinho carrinhoAtualizado = carrinhoService.atualizarCarrinho(id, carrinho);
        if (carrinhoAtualizado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(carrinhoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerCarrinho(@PathVariable Long id) {
        carrinhoService.removerCarrinho(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/pesquisar")
    public ResponseEntity<List<Carrinho>> pesquisarCarrinhos(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) Double precoMaximo,
            @RequestParam(required = false) Integer quantidadeMinima) {
        return ResponseEntity.ok(carrinhoService.pesquisarCarrinhos(nome, precoMaximo, quantidadeMinima));
    }
}
