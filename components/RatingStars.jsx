// components/RatingStars.jsx
import { Star } from "lucide-react";

export default function RatingStars({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            {hasHalfStar && (
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <Star key={i + fullStars} className="w-4 h-4 text-gray-300" />
            ))}
        </div>
    );
}
