import React, { Component } from 'react';
import { Button, TextField, Input } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

class MapForm extends Component {

	state = {
		coords: {
			ib: '',
			jb: ''
		},
		address1: '',
		address2: ''
	}

	daumPopupOpen = () => {
		//load함수를 이용하여 core스크립트의 로딩이 완료된 후, 우편번호 서비스를 실행합니다.
		const daum = window.daum;
		let coords = null;
		let geocoder = new daum.maps.services.Geocoder();
		const mapResult = this.mapResult;

    daum.postcode.load( () => {
      new daum.Postcode({
        oncomplete: (data) => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
						// 주소로 상세 정보를 검색
						console.log('###### data : ', data);
            geocoder.addressSearch(data.address, (results, status) => {
                // 정상적으로 검색이 완료됐으면
                console.log('###### results : ', results);
              if (status === daum.maps.services.Status.OK) {

                var result = results[0]; //첫번째 결과의 값을 활용

                // 해당 주소에 대한 좌표를 받아서
                coords = new daum.maps.LatLng(result.y, result.x);
								console.log('###### coords : ', coords);
								mapResult(coords, data);
              }
            });

        }
      }).open();
    });
	}

	mapResult = (coords, data) => {
		this.setState({
			coords,
			address1: `${data.address}(${data.bname2} ${data.buildingName})`,
			address2: data.jibunAddress
		});
	}

	handleChange = (e) => {
		this.setState({
			address2: e.target.value
		})
	}


	render() {
		const { coords, address1, address2 } = this.state;

		return(
			<GridList cols={1} cellHeight={80}>
				<GridListTile cols={1}>
					<TextField
						label="도로명 주소"
						name="input"
						margin="normal"
						style={{width: 350}}
						value={address1}
					/>
					<TextField
						label="상세 주소"
						name="input"
						margin="normal"
						style={{marginLeft: 12, width: 350}}
						value={address2}
						onChange={this.handleChange}
					/>
					<Button
						variant="raised"
						color="primary"
						style={{margin: 12}}
						onClick={this.daumPopupOpen}>
						우편번호 찾기
					</Button>
				</GridListTile>
				<GridListTile cols={1}>
					<TextField
						label="좌표1"
						name="input"
						margin="normal"
						style={{width: 350}}
						value={coords.ib}
					/>
					<TextField
						label="좌표2"
						name="input"
						margin="normal"
						style={{marginLeft: 12, width: 350}}
						value={coords.jb}
					/>
				</GridListTile>
			</GridList>
		);
	}
}


export default MapForm;
