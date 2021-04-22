import styled from "styled-components";
import { colors } from "../../../style/variables";

const StyleSetting = styled.div`

    .container > & {
        padding-top: 6rem;
    }

    .btn-save{
        margin: 2.2rem 0 0 auto;
        font-size: 1.4rem;
        min-width: 13rem;
        min-height: 3.7rem;
    }
   
    .setting-user{

        display: flex;
        flex-wrap: wrap;
        
        label{
            font-weight: 700;
        }
        &__error{
          white-space: nowrap;
          bottom: 0;
          transform: translateY(100%);
        }
        &__btn-change-av{
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            width: 11.8rem;
            height: 3.3rem;
            margin-bottom: auto;
            margin-top: 1.3rem;
            background-color: ${colors.buttonColor};
            color: ${colors.buttonColorText};
            border-radius: .5rem;
            font-size: 1.4rem;
            cursor: pointer;
        }
        &__avatar{
            display: none;
        }
        &__column-first{
            display: flex; 
            flex-direction: column;
            align-items: center;
            margin-right: auto;
            margin-right: 3.4rem;
            min-width: 26rem;      
        }
        &__column-second{
            margin-left: auto;
            max-width: 35rem;
            flex: 1 1 35rem;
        }
        p{

            &:not(:last-of-type){
                margin-bottom: 3rem;
            }
        }

    }
    .change-password{
        display: flex;
        flex-direction: column;

        &::before{
            display: block;
        }
        
        &__wrap{
            display: flex;
            flex-wrap: wrap;

            label{
                font-weight: 700;
            }
        }
        &__p{
            width: 100%;
            max-width: 31rem;

            &:not(:last-of-type){
                margin-right: auto;
            }
        }
       
    }


`

export default StyleSetting;