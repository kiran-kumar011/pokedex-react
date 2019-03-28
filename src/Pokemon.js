import React, {Component} from 'react';
import Image from './Image';

export default class Pokemon extends Component {
	state ={
		array: [],
		loaded: false,
		name:'',
	}

	handleChange = (e) => {
		console.log(e);
		this.setState({name: e.target.value})
	}

	componentDidMount() {
		this.setState({loaded:true})
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500`).then(res => res.json()).then(obj => this.setState({array: obj.results}))
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
						this.state.loaded ? <Image search={this.state.name} data={arr} />: ''
					}
			</div>
		);
	}
}