import React, { useId } from 'react';
import { Tag } from '../utils/types/Tag';

const TagArea = ({ tags }: { tags: Tag[] }) => {
    const id = useId(); // Generate different keys for the tags

    return (
        <div className='card__tag-grp'>
            {
                tags.map(
                    t => {
                        return (
                            <div className='card__tag-grp__tag' key={ id + t }>
                                { t }
                            </div>
                        );
                    }
                )
            }
        </div>
    );
};

export default React.memo(TagArea);