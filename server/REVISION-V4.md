# Source-faithful pilot revision

The candidate screen no longer displays instructor continuation notes. The server returns only current clinical facts, question and shuffled choice text; grades and feedback remain hidden until completion.

Revision v4 supports different path lengths through four equal 25-point domain means. Repeated questions with identical clinical information do not award extra credit. Earlier low grades remain in their domain average; clinical outcome does not add an automatic penalty. Legacy completed sessions continue using their frozen rubric and legacy scoring.

Tests: legacy scoring 4/4; domain scoring 3/3; private source/graph audit confirms all 76 source screens and 304 original choices/grades are retained, all terminal paths cover four domains, each case has a 100-point path. These checks do not establish psychometric equivalence of branch difficulty.

Private bank is distributed separately, not stored in this public repository. Deploy updated clinical-exam Edge Function before applying the private v4 SQL. SQL refuses mutation during live unexpired sessions and preserves finished sessions. Live Supabase deployment remains a separate account action. Pilot mode remains enabled.
