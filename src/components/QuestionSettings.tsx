import React from 'react';
import { Difficulty } from "../API";
import { SettingsWrapper, InputWrapper, SelectionWrapper } from './QuestionSettings.styles';

type Props = {
    getQuestions: (e: React.MouseEvent<HTMLInputElement>) => void;
    getDifficulty: (e: Difficulty) => void;
    isPlaying: boolean;
}


const QuestionSettings: React.FC<Props> = ({getQuestions, getDifficulty, isPlaying}) => {
    
    return(
        <SettingsWrapper>
            <div className="input-style">
                <span>No. of Questions (Max: 50)</span> 
                <InputWrapper isPlaying={isPlaying}>
                    <input onChange={(e: any) => {getQuestions(e.target.value);}} disabled={isPlaying} type="number" min="1" max="50"/>
                </InputWrapper>
            </div>
            <div className="selection-style">
                <span>Difficulty</span> 
                <SelectionWrapper isPlaying={isPlaying}>
                    <select onChange={(e: any) => {getDifficulty(e.target.value);}} disabled={isPlaying}>
                        <option>--Select--</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
  
                </SelectionWrapper>
            </div>
        </SettingsWrapper>
    );
}

export default QuestionSettings;