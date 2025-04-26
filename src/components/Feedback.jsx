export default function Feedback({clicks, total, positive}) {
   return(<ul>
        <li>Good: {clicks.good}</li>
        <li>Neutral: {clicks.neutral}</li>
       <li>Bad: {clicks.bad}</li>
       <li>Total: {total}</li>
       <li>Positive: {positive}%</li>
    </ul>)
}