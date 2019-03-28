import React, {Component} from 'react';

export default class Image extends Component {
	index(string) {
		var arr = string.split("/");
		var res = arr[arr.length-2];
		return res;
	}
	render() {
		let {data} = this.props;
		return (
			<div className='container'>
				{
					data.filter(val => val.name.startsWith(this.props.search)).map(value => {
						console.log(data.length)
						let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.index(value.url)}.png`;
						return	(
							<div className='pokemon'>
								<img style={{width:'150px'}} src={link} />
								<p>{value.name}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}