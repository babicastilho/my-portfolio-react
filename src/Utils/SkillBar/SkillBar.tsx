import * as React from "react";
import * as PropTypes from "prop-types";

export type SkillBarProps = {
    completed: string | number;
    type: string;
    ariaValuemin?: number;
    ariaValuemax?: number;
    ariaValuetext?: number | null;
    maxCompleted?: number;
    customLabel?: string;
    initCompletedOnAnimation?: string | number;
};

const SkillBar: React.FC<SkillBarProps> = ({
    completed,
    type,
    ariaValuemin,
    ariaValuemax,
    maxCompleted,
    customLabel,
    initCompletedOnAnimation = 0,
}) => {
    
    const initCompletedOnAnimationStr =
        typeof initCompletedOnAnimation === "number"
            ? `${initCompletedOnAnimation}%`
            : initCompletedOnAnimation;

    const getFillerWidth = (
        maxCompletedValue: SkillBarProps["maxCompleted"],
        completedValue: SkillBarProps["completed"]
    ) => {
        if (maxCompletedValue) {
            const ratio = Number(completedValue) / maxCompletedValue;
            return ratio > 1 ? "100%" : `${ratio * 100}%`;
        }
        return initCompletedOnAnimationStr;
    };

    const fillerWidth = getFillerWidth(maxCompleted, completed);

    const fillerStyles: React.CSSProperties = {
        width: fillerWidth,
    };

    const completedStr =
        typeof completed === "number" ? `${completed}%` : `${completed}`;

    const labelStr = customLabel ? customLabel : completedStr;

    return (
        <div
            className="skillBar"
            role="SkillBar"
            aria-valuenow={ parseFloat(labelStr) }
            aria-valuemin={ ariaValuemin }
            aria-valuemax={ ariaValuemax }
            aria-valuetext={ labelStr }
        >
            <div className="col-4 col-sm-3 col-lg-2 typeSkill">
                 { type } 
            </div>
            <div className="containerBar">
                <div className="fillerBar" style={fillerStyles}>
                        <span className="labelBar">
                            {labelStr}
                        </span>
                </div>
            </div>
        </div>
    );
};

SkillBar.propTypes = {
    completed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    type: PropTypes.string.isRequired,
    maxCompleted: PropTypes.number,
    
};

SkillBar.defaultProps = {
    ariaValuemin: 0,
    ariaValuemax: 100,
    maxCompleted: 100,
};

export default SkillBar;