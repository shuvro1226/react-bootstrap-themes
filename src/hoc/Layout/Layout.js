import React, { Component } from 'react';
import { config } from '../../config/config';

import Themes from '../../components/Themes/Themes';
import NavigationBar from '../../components/Navigationbar/Navigationbar';
import Wrapper from '../Wrapper/Wrapper';

class Layout extends Component {
    state = {
        themes: config.themesDefaultConfig,
        searchText: ''
    }

    componentDidMount() {
        document.title = "Bootstrap Themes Built & Curated by the Bootstrap Team.";
    }

    onSearchThemes = (event) => {
        const searchText = event.target.value.toLowerCase();
        const themesConfig = [
            ...this.state.themes
        ];
        const updatedThemesConfig = themesConfig.map(theme => {
            let visible = false;
            if (theme.name.toLowerCase().includes(searchText) || 
                theme.description.toLowerCase().includes(searchText) || 
                theme.category.toLowerCase().includes(searchText)
            ) {
                visible = true;
            }
            return {
                ...theme,
                visible: visible
            }
        })
        console.log(searchText);
        this.setState({
            themes: updatedThemesConfig,
            searchText: searchText
        })
    }

    onCategorySelect = (category) => {
        const themesConfig = [
            ...this.state.themes
        ];
        const updatedThemesConfig = themesConfig.map(theme => {
            let visible = false;
            if (theme.category.toLowerCase() === category.toLowerCase() || category === '') {
                visible = true;
            }
            return {
                ...theme,
                visible: visible
            }
        })
        this.setState({
            themes: updatedThemesConfig,
            searchText: category
        })
    }

    render() {
        return (
            <Wrapper>        
                <NavigationBar 
                    searchThemes={this.onSearchThemes}
                    searchText={this.state.searchText}
                    filterByCategories={this.onCategorySelect} />
                <Themes 
                    themes={this.state.themes}
                    searchText={this.state.searchText} />
                {this.props.children}
            </Wrapper>
        )
    }
}

export default Layout;