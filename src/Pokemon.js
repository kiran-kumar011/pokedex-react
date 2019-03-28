import React, {Component} from 'react';
import Image from './Image';
import Loading from './Loading';

export default class Pokemon extends Component {
	state ={
		array: [],
		loading: false,
		name:'',
	}

	handleChange = (e) => {
		this.setState({name: e.target.value})
	}

	componentDidMount() {
		this.setState({loading:true})
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500`).then(res => res.json()).then(obj => this.setState({array: obj.results, loading: false}))
	}
	render() {
		const arr = this.state.array;
		console.log(arr);
		return(
			<div className='mainWrapper'>
				<div className="inputWrapper">
					<input className='input' onKeyUp={this.handleChange} placeholder='Search Your Pokemon'/>
				</div>
					{ 
						this.state.loading ? <Loading /> : <Image search={this.state.name} data={arr}/>
					}
			</div>
		);
	}
}