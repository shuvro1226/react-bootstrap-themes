import React, { Component } from 'react';
import { connect } from 'react-redux';

import Themes from '../../components/Themes/Themes';
import NavigationBar from '../../components/Navigationbar/Navigationbar';
import Wrapper from '../Wrapper/Wrapper';
import * as actions from '../../store/actions/index';

class Layout extends Component {
    state = {
        searchText: ''
    }

    componentDidMount() {
        document.title = "Bootstrap Themes Built & Curated by the Bootstrap Team.";

        if (this.props.themes) {
            this.props.onSortThemes();
        }
    }

    onSearchThemes = (event) => {
        const searchText = event.target.value;
        this.onCategorySelect(searchText);
    }

    onCategorySelect = (category) => {
        this.props.onFilterThemes(category.toLowerCase());
        this.setState({
            searchText: category
        });
    }

    render() {
        return (
            <Wrapper>        
                <NavigationBar 
                    searchThemes={this.onSearchThemes}
                    searchText={this.state.searchText}
                    filterByCategories={this.onCategorySelect} />
                <Themes />
                {this.props.children}
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.themes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortThemes: () => dispatch(actions.sortThemes()),
        onFilterThemes: (filter) => dispatch(actions.filterThemes(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);