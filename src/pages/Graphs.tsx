
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar } from 'recharts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

const Graphs = () => {
  // Sample data for the charts
  const featureMeansData = [
    { feature: 'Previous Attempts', value: 1.2 },
    { feature: 'Studied Credits', value: 68.5 },
    { feature: 'Forum Activity', value: 15.3 },
    { feature: 'Quiz Scores', value: 78.2 },
    { feature: 'Resource Access', value: 142.7 },
    { feature: 'Assignment Scores', value: 82.1 },
    { feature: 'Content Views', value: 89.4 },
    { feature: 'Discussion Posts', value: 12.8 },
    { feature: 'Time Spent (hrs)', value: 45.6 },
    { feature: 'Login Frequency', value: 28.3 },
    { feature: 'Video Views', value: 34.2 },
    { feature: 'Downloads', value: 18.9 }
  ];

  const outcomeDistributionData = [
    { name: 'Pass', value: 45, color: '#22c55e' },
    { name: 'Fail', value: 25, color: '#ef4444' },
    { name: 'Withdrawn', value: 20, color: '#f59e0b' },
    { name: 'Distinction', value: 10, color: '#3b82f6' }
  ];

  const outcomeCountsData = [
    { outcome: 'Pass', count: 4500, fill: '#22c55e' },
    { outcome: 'Fail', count: 2500, fill: '#ef4444' },
    { outcome: 'Withdrawn', count: 2000, fill: '#f59e0b' },
    { outcome: 'Distinction', count: 1000, fill: '#3b82f6' }
  ];

  const featureTrendsData = [
    { week: 1, quizScores: 65, assignmentScores: 70, forumActivity: 10 },
    { week: 2, quizScores: 68, assignmentScores: 72, forumActivity: 12 },
    { week: 3, quizScores: 72, assignmentScores: 75, forumActivity: 15 },
    { week: 4, quizScores: 75, assignmentScores: 78, forumActivity: 18 },
    { week: 5, quizScores: 78, assignmentScores: 80, forumActivity: 20 },
    { week: 6, quizScores: 80, assignmentScores: 82, forumActivity: 22 },
    { week: 7, quizScores: 82, assignmentScores: 85, forumActivity: 25 },
    { week: 8, quizScores: 85, assignmentScores: 88, forumActivity: 28 }
  ];

  const genderComparisonData = [
    { gender: 'Male', Pass: 2200, Fail: 1300, Withdrawn: 1000, Distinction: 500 },
    { gender: 'Female', Pass: 2300, Fail: 1200, Withdrawn: 1000, Distinction: 500 }
  ];

  const polarData = [
    { subject: 'Pass', A: 4500, fullMark: 5000, fill: '#22c55e' },
    { subject: 'Fail', A: 2500, fullMark: 5000, fill: '#ef4444' },
    { subject: 'Withdrawn', A: 2000, fullMark: 5000, fill: '#f59e0b' },
    { subject: 'Distinction', A: 1000, fullMark: 5000, fill: '#3b82f6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Data Visualizations
          </h1>
          <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <Link to="/">
              ← Back to Home
            </Link>
          </Button>
        </div>

        <p className="text-gray-600 mb-6">
          Explore key insights from the student dataset through the visualizations below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chart 1: Feature Means */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Feature Means</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={featureMeansData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="feature" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 2: Outcome Distribution */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Outcome Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={outcomeDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {outcomeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 3: Outcome Distribution Alternate */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Outcome Distribution (Alternate)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={outcomeCountsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="outcome" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 4: Feature Trends */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Feature Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={featureTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="quizScores" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="assignmentScores" stroke="#22c55e" strokeWidth={2} />
                  <Line type="monotone" dataKey="forumActivity" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 5: Outcome Counts */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Outcome Counts</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={outcomeCountsData}>
                  <RadialBar dataKey="count" cornerRadius={10} fill="#8884d8" />
                  <PolarAngleAxis tick={false} />
                  <PolarRadiusAxis angle={30} domain={[0, 5000]} />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 6: Gender Comparison */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">Gender vs. Outcome</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={genderComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="gender" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Pass" stackId="a" fill="#22c55e" />
                  <Bar dataKey="Fail" stackId="a" fill="#ef4444" />
                  <Bar dataKey="Withdrawn" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="Distinction" stackId="a" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
