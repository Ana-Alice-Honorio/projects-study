import React from 'react';
import postsService from '../../services/posts.service';
import './post-detail.page.css';

class PostDetailPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // Atributo para armazenar os dados do post
            post: null
        }
    }

    // Função que é executada assim que o componente carrega
    componentDidMount() {
        // Recuperando os id do post na url
        let postId = this.props.match.params.id
        // Chamando a função que carrega os dados do post
        this.loadPost(postId)
    }

    // Função que carrega os dados do post e salva no state
    async loadPost(postId) {
        try {
            let res = await postsService.getOne(postId)
            this.setState({ post: res.data.data[0] })
        } catch (error) {
            console.log(error);
            alert("Não foi possível carregar post.")
        }
    }

    // Função que exclui o post, chamada ao clicar no botão "Excluir"
    async deletePost(postId) {
        
        if (!window.confirm("Deseja realmente excluir este post?")) return;

        try {
            await postsService.delete(postId)
            alert("Post excluído com sucesso")
            this.props.history.replace('/post-list')
        } catch (error) {
            console.log(error);
            alert("Não foi excluir o post.")
        }

    }

    render() {
        return (
            <div className="container">

                <div className="page-top">
                    <div className="page-top__title">
                        <h2>Post</h2>
                        <p>Detalhes do post</p>
                    </div>
                    <div className="page-top__aside">
                        <button className="btn btn-light" onClick={() => this.props.history.goBack()}>
                            Voltar
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <img className="post-img" src={this.state?.post?.imageUrl} alt="image" />
                    </div>
                    <div className="col-6">
                        <div className="post-info">
                            <h4>ID</h4>
                            <p>{this.state.post?.id}</p>
                        </div>
                        <div className="post-info">
                            <h4>Título</h4>
                            <p>{this.state.post?.title}</p>
                        </div>
                        <div className="post-info">
                            <h4>Conteúdo</h4>
                            <p>{this.state.post?.content}</p>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => this.deletePost(this.state.post.id)}>
                                Excluir
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => this.props.history.push('/post-edit/' + this.state.post.id)}>
                                Editar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default PostDetailPage