import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import ReceitaItem from './ReceitaItem';

export default class Lista extends Component {
  static navigationOptions = {
    title:'Receitas Brasil'
    };

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key:'1',
          nome: "Pão de Mel Macio (Receita Econômica)",
          por: 'Juliana Guermandi Caride',
          descricao: 'Este é um bolo de mel macio muito bom e fácil de fazer.',
          rendimento:50,
          preparo:60,
          imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/115/197/262559/262559_original.jpg',
          ingredientes: [
            {key:'1', txt:'4 ovos inteiros'},
            {key:'2', txt:'1 xícara (chá) de mel ou favinho'},
            {key:'3', txt:'1 xícara (chá) de açúcar mascavo'},
            {key:'4', txt:'1 colher (chá) de canela em pó'},
            {key:'5', txt:'1 colher (chá) de cravo em pó'},
            {key:'6', txt:'2 colheres (sopa) cheias de manteiga ou margarina'},
            {key:'7', txt:'2 xícaras (chá) de leite'},
            {key:'8', txt:'4 xícaras (chá) de farinha de trigo'},
            {key:'9', txt:'2 colheres (chá) de bicarbonato de sódio'},
            {key:'10', txt:'2 colheres (chá) de fermento em pó'},
            {key:'11', txt:'1 kg de chocolate fracionado para banhar'}
          ],
          modo: [
            {key:'1', txt:'Primeiramente, bata muito bem os ovos na batedeira, até ficar bem homogenio.'},
            {key:'2', txt:'Depois, adicione o mel, o açucar, o chocolate, o cravo, a canela.'},
            {key:'3', txt:'Bata muito bem ate ficar uma massa totalmente homegenea.'},
            {key:'4', txt:'Por ultimo, adicione o bicarbonato e o fermente e misture a massa.'},
            {key:'5', txt:'Preaqueça o forno a 180º C antes de começar a encher as forminhas prontas.'},
            {key:'6', txt:'Asse por aproximadamente 25 minutos, na mesma temperatura.'},
            {key:'7', txt:'Banhe-os no chocolate, espere secar bem e embale-os'},
            {key:'8', txt:'Essa receita pode ser vendida a R$ 2,50 cada pãozinho'}
          ]
        },
        {
          key:'2',  
          nome: "Bolo de Banana Fofinho",
          por: 'Equipe Tudo Gostoso',
          descricao: 'Este é um bolo de banana fofinho e ótimo.',
          rendimento:16,
          preparo:45,
          imagem: 'http://www.receitasnestle.com.br/images/default-source/recipes/bolo_de_banana_caramelada_alta.jpg',
          ingredientes: [
            {key:'1', txt:'4 ovos inteiros'},
            {key:'2', txt:'1 xícara (chá) de mel ou favinho'},
            {key:'3', txt:'1 xícara (chá) de açúcar mascavo'},
            {key:'4', txt:'1 colher (chá) de canela em pó'},
            {key:'5', txt:'1 colher (chá) de cravo em pó'},
            {key:'6', txt:'2 colheres (sopa) cheias de manteiga ou margarina'},
            {key:'7', txt:'2 xícaras (chá) de leite'},
            {key:'8', txt:'4 xícaras (chá) de farinha de trigo'},
            {key:'9', txt:'2 colheres (chá) de bicarbonato de sódio'},
            {key:'10', txt:'2 colheres (chá) de fermento em pó'},
            {key:'11', txt:'1 kg de chocolate fracionado para banhar'}
          ],
          modo: [
            {key:'1', txt:'Bata no liquidificador o leite, o oleo, o açucar e o ovos.'},
            {key:'2', txt:'Junte as bananas e bata até triturar levemente.'},
            {key:'3', txt:'Peneire o trigo, a maizena e o fermento, passe pra uma tigela.'},
            {key:'4', txt:'Coloque a massa em uma forma redonda com furo central (20 cm de diametro).'},
            {key:'5', txt:'Espere amornar e desenforme.'}
          ]
        }
      ]
    };
    this.clicou = this.clicou.bind(this);
  }

  clicou(item) {
    this.props.navigation.navigate('Receita', item);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.state.list}
            renderItem={({item}) => <ReceitaItem data={item} onPress={() =>{
                this.clicou(item);
            }} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});