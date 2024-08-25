import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <Nav>
        <Logo>
            <Link to ='/'>
            <img src='/images/logo.svg' alt='disney'/>
            </Link>
        </Logo>
        <NavMenu>
            <a href='/'>
                <img src='/images/home-icon.svg' alt='home'/>
                <span>HOME</span>
            </a>
            <StyledButton onClick={() => alert('Button clicked')}>
                <img src='/images/search-icon.svg' alt='SEARCH'/>
                <Span class>SEARCH</Span>
            </StyledButton>
            <StyledButton onClick={() => alert('Button clicked')}>
                <img src='/images/original-icon.svg' alt='ORIGINAL'/>
                <Span>ORIGINAL</Span>
            </StyledButton>
            <StyledButton onClick={() => alert('Button clicked')}>
                <img src='/images/movie-icon.svg' alt='MOVIES'/>
                <Span>MOVIES</Span>
            </StyledButton>
            <StyledButton onClick={() => alert('Button clicked')}>
                <img src='/images/series-icon.svg' alt='SERIES'/>
                <Span>SERIES</Span>
            </StyledButton>
        </NavMenu>

        <SignOut>
            <DropDown>
                <span>Sign Out</span>
            </DropDown>
        </SignOut>

    </Nav>
  )
}

const Nav = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#090913;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 36px;
    letter-spacing:1.6px;
    z-index:3;
`
const Logo = styled.a`
    padding:0;
    width:80px;
    max-height:70px;
    margin-top:4px
    display:inline-block;
    img{
    display:block;
    width:100%
    }
`

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    height:100px;
    justify-content:flex-end;
    margin:0;
    padding:0;
    position relative;
    margin-right:auto;
    margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:20px;
            min-width:20px;
            z-index:auto;
        }

        span{
            color:rgb(249,249,249);
            font-size:13px;
            text-transform:uppercase;
            line-height:1.08;
            padding:2px 0;
            letter-spacing:1.42;
            white-space:nowrap;
            position:relative;

            &:before{
                content:"";
                background-color:rgb(249,249,249);            
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                height:2px;
                left:0px;
                width:auto;
                position:absolute;
                right:0px;
                transform-origin:left center;
                opacity:0;
                transition: all 250ms cubic-beizer(0.25,0.46,0.45,0.94);
                visibility:hidden;
                transform:scaleX(0);
            }
            
        }
            &:hover{
                span:before{
                    transform:scaleX(1);
                    visibility:visible;
                    opacity:1 !important;
                }
            }
    }
`

const DropDown = styled.div``

const SignOut = styled.div``

const StyledButton = styled.button`
  background: none;
  border: none;
  padding-bottom: 3px;
  cursor: pointer;
  display: block;
  position: relative;
  border-radius: 4px;
  color:white;

  img {
    width: 40px;
    height: 30px;
  }

`
const Span = styled.span`
            color:rgb(249,249,249);
            font-size:13px;
            text-transform:uppercase;
            line-height:1.08;
            padding:2px 0;
            letter-spacing:1.42;
            white-space:nowrap;
            position:relative;

            &:before{
                content:"";
                background-color:rgb(249,249,249);            
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                height:2px;
                left:0px;
                width:auto;
                position:absolute;
                right:0px;
                transform-origin:left center;
                opacity:0;
                transition: all 250ms cubic-beizer(0.25,0.46,0.45,0.94);
                visibility:hidden;
                transform:scaleX(0);
   }
`